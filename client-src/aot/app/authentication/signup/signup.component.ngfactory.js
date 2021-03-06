/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '../../../../app/authentication/signup/signup.component';
import * as i2 from '@angular/forms';
import * as i3 from '../../../../app/authentication/logger.service';
import * as i4 from '../../../../app/services/authentication.service';
import * as i5 from '@angular/router';
var styles_SignupComponent = [];
export var RenderType_SignupComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_SignupComponent, data: {} });
export function View_SignupComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 78, 'form', [['novalidate',
                '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null], [2,
                'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngSubmit'], [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i0.ɵnov(_v, 2).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i0.ɵnov(_v, 2).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.signup() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i2.ɵbf, [], null, null), i0.ɵdid(16384, null, 0, i2.NgForm, [[8, null],
            [8, null]], null, { ngSubmit: 'ngSubmit' }), i0.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i0.ɵdid(16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(),
            i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 11, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['First Name:'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 5, 'input', [['name', 'firstName'], ['type', 'text']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null,
                'input'], [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 12)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 12).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 12)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 12)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.user.firstName = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 11, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Last Name:'])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 5, 'input', [['name', 'lastName'], ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 25)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 25).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 25)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 25)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.user.lastName = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 11, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Email:'])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 5, 'input', [['name', 'email'], ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 38)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 38).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 38)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 38)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.user.email = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 11, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Username:'])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 5, 'input', [['name', 'username'], ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 51)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 51).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 51)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 51)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.user.username = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 11, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Password:'])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 5, 'input', [['name', 'password'], ['type', 'password']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 64)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 64).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 64)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 64)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.user.password = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'input', [['type', 'submit'], ['value',
                'Sign up']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵted(null, ['\n  '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_14 = 'firstName';
        var currVal_15 = _co.user.firstName;
        _ck(_v, 14, 0, currVal_14, currVal_15);
        var currVal_23 = 'lastName';
        var currVal_24 = _co.user.lastName;
        _ck(_v, 27, 0, currVal_23, currVal_24);
        var currVal_32 = 'email';
        var currVal_33 = _co.user.email;
        _ck(_v, 40, 0, currVal_32, currVal_33);
        var currVal_41 = 'username';
        var currVal_42 = _co.user.username;
        _ck(_v, 53, 0, currVal_41, currVal_42);
        var currVal_50 = 'password';
        var currVal_51 = _co.user.password;
        _ck(_v, 66, 0, currVal_50, currVal_51);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i0.ɵnov(_v, 4).ngClassUntouched;
        var currVal_1 = i0.ɵnov(_v, 4).ngClassTouched;
        var currVal_2 = i0.ɵnov(_v, 4).ngClassPristine;
        var currVal_3 = i0.ɵnov(_v, 4).ngClassDirty;
        var currVal_4 = i0.ɵnov(_v, 4).ngClassValid;
        var currVal_5 = i0.ɵnov(_v, 4).ngClassInvalid;
        var currVal_6 = i0.ɵnov(_v, 4).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = i0.ɵnov(_v, 16).ngClassUntouched;
        var currVal_8 = i0.ɵnov(_v, 16).ngClassTouched;
        var currVal_9 = i0.ɵnov(_v, 16).ngClassPristine;
        var currVal_10 = i0.ɵnov(_v, 16).ngClassDirty;
        var currVal_11 = i0.ɵnov(_v, 16).ngClassValid;
        var currVal_12 = i0.ɵnov(_v, 16).ngClassInvalid;
        var currVal_13 = i0.ɵnov(_v, 16).ngClassPending;
        _ck(_v, 11, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        var currVal_16 = i0.ɵnov(_v, 29).ngClassUntouched;
        var currVal_17 = i0.ɵnov(_v, 29).ngClassTouched;
        var currVal_18 = i0.ɵnov(_v, 29).ngClassPristine;
        var currVal_19 = i0.ɵnov(_v, 29).ngClassDirty;
        var currVal_20 = i0.ɵnov(_v, 29).ngClassValid;
        var currVal_21 = i0.ɵnov(_v, 29).ngClassInvalid;
        var currVal_22 = i0.ɵnov(_v, 29).ngClassPending;
        _ck(_v, 24, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);
        var currVal_25 = i0.ɵnov(_v, 42).ngClassUntouched;
        var currVal_26 = i0.ɵnov(_v, 42).ngClassTouched;
        var currVal_27 = i0.ɵnov(_v, 42).ngClassPristine;
        var currVal_28 = i0.ɵnov(_v, 42).ngClassDirty;
        var currVal_29 = i0.ɵnov(_v, 42).ngClassValid;
        var currVal_30 = i0.ɵnov(_v, 42).ngClassInvalid;
        var currVal_31 = i0.ɵnov(_v, 42).ngClassPending;
        _ck(_v, 37, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31);
        var currVal_34 = i0.ɵnov(_v, 55).ngClassUntouched;
        var currVal_35 = i0.ɵnov(_v, 55).ngClassTouched;
        var currVal_36 = i0.ɵnov(_v, 55).ngClassPristine;
        var currVal_37 = i0.ɵnov(_v, 55).ngClassDirty;
        var currVal_38 = i0.ɵnov(_v, 55).ngClassValid;
        var currVal_39 = i0.ɵnov(_v, 55).ngClassInvalid;
        var currVal_40 = i0.ɵnov(_v, 55).ngClassPending;
        _ck(_v, 50, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40);
        var currVal_43 = i0.ɵnov(_v, 68).ngClassUntouched;
        var currVal_44 = i0.ɵnov(_v, 68).ngClassTouched;
        var currVal_45 = i0.ɵnov(_v, 68).ngClassPristine;
        var currVal_46 = i0.ɵnov(_v, 68).ngClassDirty;
        var currVal_47 = i0.ɵnov(_v, 68).ngClassValid;
        var currVal_48 = i0.ɵnov(_v, 68).ngClassInvalid;
        var currVal_49 = i0.ɵnov(_v, 68).ngClassPending;
        _ck(_v, 63, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49);
        var currVal_52 = _co.errorMessage;
        _ck(_v, 77, 0, currVal_52);
    });
}
export function View_SignupComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'signup', [], null, null, null, View_SignupComponent_0, RenderType_SignupComponent)),
        i0.ɵprd(512, null, i3.LoggerService, i3.LoggerService, []), i0.ɵdid(49152, null, 0, i1.SignupComponent, [i4.AuthenticationService, i5.Router, i3.LoggerService], null, null)], null, null);
}
export var SignupComponentNgFactory = i0.ɵccf('signup', i1.SignupComponent, View_SignupComponent_Host_0, {}, {}, []);
//# sourceMappingURL=signup.component.ngfactory.js.map