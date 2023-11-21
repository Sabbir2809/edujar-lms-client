import Url from "../assets/RegistrationBG.jpg"
import {Label, TextInput} from "keep-react";
import {Envelope} from "phosphor-react";
const ForgetPassword = ()=> {
    return (
        <div className="relative h-screen flex items-center justify-center px-10">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${Url}')` }}></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Content */}
            <div className="z-10 grid w-[500px]">
                <div className="bg-slate-700 opacity-100 rounded-[30px] p-10">
                    <h1 className="pb-3">Type your registered email</h1>
                    <div>
                        <TextInput
                            placeholder="example@gmail.com"
                            color="gray"
                            sizing="md"
                            addon={<Envelope size={20} color="#5E718D" />}
                            addonPosition="left"
                        />
                        <div className="pt-5">
                            <button className="btn bg-green-300 text-white text-bold text-lg w-full">Send OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ForgetPassword;
