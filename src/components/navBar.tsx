import {ModeToggle} from "@/components/modeToggle.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Linkedin} from "lucide-react";

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between p-4">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div className="flex gap-2">
                <div id="menu">
                    <Button variant="link">About</Button>
                    <Button variant="link">Experience</Button>
                    <Button variant="link">Contact</Button>
                </div>
                <div className="flex gap-1">
                    <Button variant="outline" size="icon">
                        <a href="https://www.linkedin.com/in/strakapavel/" target="_blank">
                            <Linkedin className="h-4 w-4"/>
                        </a>
                    </Button>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
