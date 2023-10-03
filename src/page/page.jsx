import { Card, Navbar, Section, Sidebar } from './components';

export const PageComponents = () => {
    return (
        <div className='bg-gradient-to-b from-stone-900 to-slate-900 min-h-screen w-screen flex'>
            <Sidebar />
            <Section className='w-full flex flex-col'>
                <Navbar />
                <Section className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-6 p-8 '>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Section>
            </Section>
        </div>
    );
};
