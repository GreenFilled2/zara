'use client';

interface NameProps {
    propName: string;
}
export default function Name({ }: NameProps) {
    return (
        <div>
            <h1>Hello Root and MetaData Name</h1>
        </div>
    );
}