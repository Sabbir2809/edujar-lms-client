import { Notification } from "phosphor-react";
import {Card} from "keep-react";

const Categories = () => {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-cyan-100 py-2 md:py-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Top <span className="text-success">Categories</span></h1>
                <p className="font-bold">12,000+ unique online course list designs</p>
            </div>
            <div className="grid flex justify-center grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4 px-5 md:px-20 my-10 md:py-8">
                <Card className="w-full p-4 hover:border-green-300">
                    <Card.Container className="flex items-center justify-center">
                        <Notification
                            className="bg-green-500 text-slate-50 p-4 rounded"
                            size={60}
                        />
                    </Card.Container>
                    <Card.Container className="text-center">
                        <Card.Title>Digital Marketing</Card.Title>
                        <Card.Description className="py-2">
                            10 courses
                        </Card.Description>
                    </Card.Container>
                </Card>
                <Card className="w-full p-4 hover:border-green-300">
                    <Card.Container className="flex items-center justify-center">
                        <Notification
                            className="bg-green-500 text-slate-50 p-4 rounded"
                            size={60}
                        />
                    </Card.Container>
                    <Card.Container className="text-center">
                        <Card.Title>Digital Marketing</Card.Title>
                        <Card.Description className="py-2">
                            10 courses
                        </Card.Description>
                    </Card.Container>
                </Card>
                <Card className="w-full p-4 hover:border-green-300">
                    <Card.Container className="flex items-center justify-center">
                        <Notification
                            className="bg-green-500 text-slate-50 p-4 rounded"
                            size={60}
                        />
                    </Card.Container>
                    <Card.Container className="text-center">
                        <Card.Title>Digital Marketing</Card.Title>
                        <Card.Description className="py-2">
                            10 courses
                        </Card.Description>
                    </Card.Container>
                </Card>
                <Card className="w-full p-4 hover:border-green-300">
                    <Card.Container className="flex items-center justify-center">
                        <Notification
                            className="bg-green-500 text-slate-50 p-4 rounded"
                            size={60}
                        />
                    </Card.Container>
                    <Card.Container className="text-center">
                        <Card.Title>Digital Marketing</Card.Title>
                        <Card.Description className="py-2">
                            10 courses
                        </Card.Description>
                    </Card.Container>
                </Card>
                <Card className="w-full p-4 hover:border-green-300">
                    <Card.Container className="flex items-center justify-center">
                        <Notification
                            className="bg-green-500 text-slate-50 p-4 rounded"
                            size={60}
                        />
                    </Card.Container>
                    <Card.Container className="text-center">
                        <Card.Title>Digital Marketing</Card.Title>
                        <Card.Description className="py-2">
                            10 courses
                        </Card.Description>
                    </Card.Container>
                </Card>
                <Card className="w-full p-4 hover:border-green-300">
                    <Card.Container className="flex items-center justify-center">
                        <Notification
                            className="bg-green-500 text-slate-50 p-4 rounded"
                            size={60}
                        />
                    </Card.Container>
                    <Card.Container className="text-center">
                        <Card.Title>Digital Marketing</Card.Title>
                        <Card.Description className="py-2">
                            10 courses
                        </Card.Description>
                    </Card.Container>
                </Card>
            </div>
        </div>

    );
};

export default Categories;
