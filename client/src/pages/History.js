import React from 'react';
import HistoryCalendar from '../components/HistoryCalendar'

function History(){

    return (
        <div>
        <div className="bg-lime1">
            <div className="p-auto max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="max-w-4xl mx-auto text-center font-bold">
                    <div className="text-md text-white">
                        <HistoryCalendar />
                    </div>
                </div>
            </div>              
        </div>
        </div>

    );
}

export default History;