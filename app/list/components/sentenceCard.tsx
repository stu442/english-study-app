'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Dot from '@/public/assets/icons/dot.svg';


interface SentenceCardProps {
    sentence: string;
    translation: string;
    createdAt: Date;
    dueDate: Date;
    status: SentenceCardStatus;
}

export enum SentenceCardStatus {
    NEW = "new",
    LEARNING = "learning",
    COMPLETED = "completed",
}

export default function SentenceCard({ sentence, translation, createdAt, dueDate, status }: SentenceCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{sentence}</CardTitle>
                <CardDescription>{translation}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <div>
                        <p>Created at: {createdAt.toLocaleDateString()}</p>
                        <p>Due date: {dueDate.toLocaleDateString()}</p>
                        <p>Status: {status}</p>
                    </div>
                    {/* 카드 설정  */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="h-10">
                            <Dot width={20} height={20} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardContent>
        </Card>
    )
}
