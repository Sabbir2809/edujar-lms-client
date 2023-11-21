import Url from "../assets/RegistrationBG.jpg"
import { TextInput} from "keep-react";
import {Envelope, EyeSlash, Lock, IdentificationBadge, SimCard} from "phosphor-react";
import {Link} from "react-router-dom";
function Registration() {
    return (
        <div className="relative h-screen flex items-center justify-center px-10">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${Url}')` }}></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Content */}
            <div className="z-10 grid md:grid-cols-2 lg:grid-cols-2">
                <div className="px-10">
                    <h1 className="text-info text-8xl font-bold">Create New Account</h1>
                    <h3 className="py-3">Already Registered ? <Link className="btn btn-sm" to="/login">Login</Link></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper mauris in magna venenatis suscipit. </p>
                </div>
                <div className="bg-slate-700 opacity-75 rounded-[30px] p-10">
                    <div>
                        <h1 className="text-2xl pb-5 ">Register</h1>
                        <TextInput
                            placeholder="Name"
                            color="gray"
                            addon={<IdentificationBadge size={20} color="#5E718D" />}
                            addonPosition="left"
                        />
                        <br/>
                        <TextInput
                            placeholder="example@gmail.com"
                            color="gray"
                            sizing="md"
                            addon={<Envelope size={20} color="#5E718D" />}
                            addonPosition="left"
                        />
                        <br/>
                        <TextInput
                            placeholder="Mobile No"
                            color="gray"
                            sizing="md"
                            addon={<SimCard size={20} color="#5E718D" />}
                            addonPosition="left"
                        />
                        <br/>
                        <TextInput
                            placeholder="password"
                            color="gray"
                            sizing="md"
                            type="password"
                            addon={<Lock size={20} color="#5E718D" />}
                            addonPosition="left"
                            icon={<EyeSlash size={20} color="#5E718D" />}
                            iconPosition="right"
                        />
                        <div className="pt-5">
                            <button className="btn bg-green-300 text-white text-bold text-lg w-full">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registration;
