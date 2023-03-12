interface IItem {
    id: string;
    type: string;
    classItem: string;
    title: string;
    descr: string;
    price: number;
    amount: number;
    typeAmount: string;
    stepAmount: string;
    images: string[];
    country?: string;
    region?: string;
    collectionYear?: Date;
    pressingYear?: Date;
    arrSteps?: string[];
}   
export default IItem;