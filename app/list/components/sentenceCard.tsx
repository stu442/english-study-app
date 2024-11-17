'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Dot from '@/public/assets/icons/dot.svg';


interface SentenceCardProps {
    key: string;
    sentence: string;
    translation: string | null;
    createdAt: Date;
    dueDate: Date;
    status: number;
}

export enum SentenceCardStatus {
    NEW = "new",
    COMPLETED = "completed",
    LEARNING = "learning",
}

export function getSentenceCardStatus(status: number): SentenceCardStatus {
    switch (status) {
        case 0: return SentenceCardStatus.NEW;
        case 1: return SentenceCardStatus.LEARNING;
        case 2: return SentenceCardStatus.COMPLETED;
        default: return SentenceCardStatus.NEW;
    }
}

export default function SentenceCard({ key, sentence, translation, createdAt, dueDate, status }: SentenceCardProps) {
    return (
        <Card key={key}>
            <CardHeader>
                <CardTitle>{sentence}</CardTitle>
                <CardDescription>{translation}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <div>
                        <p>Created at: {createdAt.toLocaleDateString()}</p>
                        <p>Due date: {dueDate.toLocaleDateString()}</p>
                        <p>Status: {getSentenceCardStatus(status)}</p>
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
