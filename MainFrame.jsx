


import * as React from 'react';
import { ScheduleComponent, Day, Week, Month, Inject, Print, ViewDirective, ViewsDirective,Resize, DragAndDrop ,EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import Navbar from './Navbar';
import Footer from './Footer';

import { extend } from '@syncfusion/ej2-base';

import { scheduleData } from './datasource.json';

class MainFrame extends React.Component {
               
   
  localData: EventSettingsModel = {
    dataSource : [
      {
        Id: 1,
        Subject: 'Paris',
        StartTime: new Date(2021, 9, 28, 10, 0),
        EndTime: new Date(2021, 9, 28, 12, 30),
        location: 'mandup'
      },
      {
        Id: 2,
        Subject: 'Mumbai',
        StartTime: new Date(2021, 9, 29, 10, 0),
        EndTime: new Date(2021, 9, 29, 12, 30),
        location: 'Thane'
      }]
  };
  
  
 
    
  constructor() {
        super(...arguments);
        this.data = extend([], this.localData, null, true);
    }
  onActionBegin(args) {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                text: 'Print', cssClass: 'e-schedule-print', click: this.onPrintIconClick.bind(this)
            };
            args.items.push(exportItem);
        }
    }
    // onPrintIconClick() {
    //     this.scheduleObj.print();
    // }

     onPrintIconClick() {
        let printModel = {
            agendaDaysCount: 14,
            cssClass: 'e-print-schedule',
            currentView: this.scheduleObj.currentView,
            dateFormat: 'dd-MMM-yyyy',
            enableRtl: false,
            endHour: '18:00',
            firstDayOfWeek: 1,
            firstMonthOfYear: 0,
            group: {},
            height: 'auto',
            locale: this.scheduleObj.locale,
            maxDate: this.scheduleObj.selectedDate,
            minDate: this.scheduleObj.getCurrentViewDates()[0],
            readonly: true,
            resources: [],
            rowAutoHeight: false,
            selectedDate: new Date(),
            showHeaderBar: true,
            showTimeIndicator: true,
            showWeekNumber: false,
            showWeekend: false,
            startHour: '06:00',
            timeFormat: 'HH',
            timeScale: { enable: true },
            width: 'auto',
            workDays: [1, 2, 3, 4, 5, 6, 7, 8],
            workHours: { highlight: true, start: '10:00', end: '24:00' }
        };
        this.scheduleObj.print(printModel);
    }
  
  render() {
    // console.log(this.data)
    return <>
      <div>
        <Navbar />
       
      <ScheduleComponent ref={schedule => this.scheduleObj = schedule} height='550px' selectedDate={new Date(2021, 10, 13)} eventSettings={{dataSource: this.data}} actionBegin={this.onActionBegin.bind(this)} >
        <ViewsDirective>
          <ViewDirective option='Day' startHour='8:00' endHour='19:00'></ViewDirective>
          <ViewDirective option='Week' startHour='8:00' endHour='24:00' isSelected={true}></ViewDirective>
          <ViewDirective option='Month'></ViewDirective>
          
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Resize, DragAndDrop ,Print]} />
      </ScheduleComponent>
        <Footer />
        </div>
      </>
  };
};
export default MainFrame;
// ReactDOM.render(<App />, document.getElementById('schedule')); */}