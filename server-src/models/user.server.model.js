const mongoose=require('mongoose');
const crypto=require('crypto');
const Schema= mongoose.Schema;
const UserSchema=new Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        match:[/.+\@.+\..+/,"Please fill a valid e-mail address"]
    },
    username:{
        type:String,
        trim:true,
        unique:true,
        required:'Username is required'
    },
    password:{
        type:String,
        validate:[(password)=>{
            return password && password.length>6;
        },'Password should be longer']
    },
    salt:{
        type:String
    },
    provider:{
        type:String,
        required:'Provider is required'
    },
    providerId:String,
    providerData:{},
    created:{
        type:Date,
        default:Date.now
    },
    website:{
        type:String,
        get: (url)=>{
            if (!url){
                // url="Empty Url";
                return url;
            }else{
                if(url.indexOf('http://')!==0 && url.indexOf('https://')!==0){
                    url='http://'+url;
                }
            }
            return url;
        }
    }
});
UserSchema.virtual('fullName')
          .get(function(){return this.firstName+' '+this.lastName;})
          .set(function(fullName){
              const splitName=fullName.split(' ');
              this.firstName=splitName[0] || '';
              this.lastName=splitName[1] || '';
          });
UserSchema.pre('save',function(next){
    if (this.password){
        this.salt=new Buffer(crypto.randomBytes(16).toString('base64'),'base64');
        this.password=this.hashPassword(this.password);
    }
    next();
});
UserSchema.methods.hashPassword=function(password){
    return crypto.pbkdf2Sync(password,this.salt,10000,64).toString('base64');
};
UserSchema.methods.authenticate=function(password){
    console.log('inside UserSchema.methods.authenticate check this keyword');
    console.log(this);
    return this.password === this.hashPassword(password);
};
UserSchema.statics.findUniqueUsername=function(username,suffix,callback){
    var possibleUsername=username+(suffix||'');
    console.log('inside UserSchema.statics.findUniqueUsername  check this keyword');
    console.log(this);
    this.findOne({username:possibleUsername},(err,user)=>{
        if(!err){
            if (!user){
                callback(possibleUsername);
            }else{
                return this.findUniqueUsername(username,(suffic||0)+1,callback);
            }
        }else{
            callback(null);
        }
    });
};
UserSchema.set('toJSON',{getters:true,virtuals:true});
mongoose.model('User',UserSchema);
const PostSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.ObjectId,
        ref:'User'
    }
});
mongoose.model('Post',PostSchema);

