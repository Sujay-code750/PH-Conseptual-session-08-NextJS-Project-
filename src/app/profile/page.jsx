"use client";

import { UpdateUserDetails } from "@/components/UpdateUserDetails";
import { useSession } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {

       const userData = useSession();
        const user = userData.data?.user;

    return (
        <div>
            <div className="max-w-96 mx-auto mt-5">
                <Card className="flex items-center flex-col border"> 
                       <Avatar className="w-15 h-15 rounded-full">
                            <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer"/>
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                          </Avatar>
                          <h1 className="font-semibold">{user?.name}</h1>
                          <p>{user?.email}</p>

                          <UpdateUserDetails></UpdateUserDetails>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;