export const dynamic = 'force-dynamic'

import { supabase } from "@/utils/supabase/client";
import SentenceCard from "./sentenceCard";


async function getSentences() {
    const result = await supabase
        .from('sentences')
        .select('*')
        .range(0, 9);

    return result.data || [];
}

export default async function SentenceList() {
    const sentences = await getSentences();

    return (
        <>
            {sentences.map((sentenceData) => (
                <SentenceCard
                    key={sentenceData.id}
                    sentence={sentenceData.content}
                    translation={sentenceData.translation}
                    createdAt={sentenceData.created_at ? new Date(sentenceData.created_at) : new Date()}
                    dueDate={sentenceData.next_review_at ? new Date(sentenceData.next_review_at) : new Date()}
                    status={sentenceData.status}
                />
            ))}
        </>
    );
}
