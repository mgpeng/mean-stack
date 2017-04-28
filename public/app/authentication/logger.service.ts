
import { Injectable,OnInit} from '@angular/core';

@Injectable()
export class LoggerService {
    logs:String[]=[];
    constructor(){
        this.logs.push('logger at '+Date.now());
    }
    showLastLog(){
        console.log(this.logs.length===0 ? 'No logger happend' : this.logs[this.logs.length-1]);
    }
    showAllLogs(){
        this.logs.forEach(item=>console.log(item));
    }
}