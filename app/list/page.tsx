import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AddSentenceForm } from "./components/addSentenceForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SentenceList from "./components/getSentences";


export default async function ListPage() {
    return (
        <div className="flex flex-col gap-8 p-8">
            <h1 className="text-3xl font-bold">Sentence Management</h1>
            {/* 문장 추가 폼 */}
            <Card>
                <CardHeader className="text-lg font-bold">Add New Sentence</CardHeader>
                <CardContent>
                    <AddSentenceForm />
                </CardContent>
            </Card>
            {/* TODO : 필터 */}
            <div className="flex gap-2 w-1/4">
                <Select defaultValue="all">
                    <SelectTrigger>
                        <SelectValue placeholder="status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="learning">Learning</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="due_date">
                    <SelectTrigger>
                        <SelectValue placeholder="date"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="due_date">Due Date</SelectItem>
                        <SelectItem value="created_at">Created At</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {/* 문장 리스트 */}
            <SentenceList />
        </div>
    )
}
