import { SentenceCardStatus } from "../components/sentenceCard";

class SentenceData {
    id: string;
    sentence: string;
    translation: string;
    notes?: string;
    createdAt: Date;
    dueDate: Date;
    status: SentenceCardStatus;

    constructor(
        id: string,
        sentence: string,
        translation: string,
        notes: string = "",
        createdAt: Date = new Date(),
        dueDate: Date = new Date(),
        status: SentenceCardStatus = SentenceCardStatus.NEW
    ) {
        this.id = id;
        this.sentence = sentence;
        this.translation = translation;
        this.notes = notes;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
        this.status = status;
    }

    updateStatus(newStatus: SentenceCardStatus) {
        this.status = newStatus;
    }

    updateDueDate(newDueDate: Date) {
        this.dueDate = newDueDate;
    }

    addNotes(additionalNotes: string) {
        this.notes = this.notes ? `${this.notes}\n${additionalNotes}` : additionalNotes;
    }
}

// Mock data
const mockSentences: SentenceData[] = [
    new SentenceData(
        "1",
        "The quick brown fox jumps over the lazy dog.",
        "빠른 갈색 여우가 게으른 개를 뛰어넘습니다.",
        "This sentence contains all the letters of the English alphabet.",
        new Date("2024-03-01"),
        new Date("2024-03-15"),
        SentenceCardStatus.NEW
    ),
    new SentenceData(
        "2",
        "To be or not to be, that is the question.",
        "존재할 것인가 존재하지 않을 것인가, 그것이 문제로다.",
        "Famous quote from Shakespeare's Hamlet.",
        new Date("2024-03-02"),
        new Date("2024-03-16"),
        SentenceCardStatus.LEARNING
    ),
    new SentenceData(
        "3",
        "All that glitters is not gold.",
        "반짝이는 모든 것이 금은 아니다.",
        "A proverb meaning appearances can be deceiving.",
        new Date("2024-03-03"),
        new Date("2024-03-17"),
        SentenceCardStatus.COMPLETED
    ),
    new SentenceData(
        "4",
        "Where there's a will, there's a way.",
        "뜻이 있는 곳에 길이 있다.",
        "Encourages perseverance and determination.",
        new Date("2024-03-04"),
        new Date("2024-03-18"),
        SentenceCardStatus.NEW
    ),
    new SentenceData(
        "5",
        "Actions speak louder than words.",
        "행동이 말보다 더 크게 말한다.",
        "Emphasizes the importance of actions over mere words.",
        new Date("2024-03-05"),
        new Date("2024-03-19"),
        SentenceCardStatus.LEARNING
    ),
    new SentenceData(
        "6",
        "The early bird catches the worm.",
        "일찍 일어나는 새가 벌레를 잡는다.",
        "Encourages being proactive and starting early.",
        new Date("2024-03-06"),
        new Date("2024-03-20"),
        SentenceCardStatus.NEW
    ),
    new SentenceData(
        "7",
        "Don't count your chickens before they hatch.",
        "닭이 부화하기 전에 병아리 수를 세지 마라.",
        "Warns against being overconfident about future outcomes.",
        new Date("2024-03-07"),
        new Date("2024-03-21"),
        SentenceCardStatus.LEARNING
    ),
    new SentenceData(
        "8",
        "A picture is worth a thousand words.",
        "한 장의 사진이 천 마디 말의 가치가 있다.",
        "Emphasizes the power of visual communication.",
        new Date("2024-03-08"),
        new Date("2024-03-22"),
        SentenceCardStatus.COMPLETED
    ),
    new SentenceData(
        "9",
        "When in Rome, do as the Romans do.",
        "로마에 가면 로마법을 따르라.",
        "Advises adapting to local customs when visiting new places.",
        new Date("2024-03-09"),
        new Date("2024-03-23"),
        SentenceCardStatus.NEW
    ),
    new SentenceData(
        "10",
        "The pen is mightier than the sword.",
        "펜은 칼보다 강하다.",
        "Suggests that communication and education are more powerful than violence.",
        new Date("2024-03-10"),
        new Date("2024-03-24"),
        SentenceCardStatus.LEARNING
    )
];

export default mockSentences;
