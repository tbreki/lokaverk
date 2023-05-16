import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
  
export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());
  
    return (
        <main>

        <nav className="flex sm:justify-center space-x-4">
          {[
            ['Home', '/page'],
            ['Order', '/team'],
            ['Contact', '/projects'],
            ['Book', './book'],
          ].map(([title, url]) => (
            
            <a href={url}className="rounded-lg px-3 py-2 text-maingreen font-medium hover:bg-maingreen hover:text-mainred">{title}</a>
            
          ))}
         
            </nav>
       
       <div>
            <h1>NextJs Calendar - GeeksforGeeks</h1>
            <Calendar
                //onChange={onChange}
                value={value}
            />
        </div>
    );
    </main>
    )}

