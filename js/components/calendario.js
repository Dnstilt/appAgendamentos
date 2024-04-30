document.getElementById('calendario').innerHTML = `
<div class="tabs">
    <div class="tab">
        <button class="tablinks" data-origin="tab1">Cadastrar cliente</button> 
        <button class="tablinks" data-origin="tab2">Dashboard</button>
    </div>
        
    <div data-target="tab1" class="tabcontent">
        <br>
        <div class="calendario">
            <div class="table-responsive" id="calendarFull"></div>
        </div>
        <br>
    </div>
        
    <div data-target="tab2" class="tabcontent">
        <h3>Agendamentos</h3>
    </div>
        
    <div data-target="tab3" class="tabcontent">
        <h3>Dashboard</h3>
    </div>
</div>
 `;

   
 var origins = document.querySelectorAll("button[data-origin]");
 for (let i = 0; i < origins.length; i++) {
     origins[i].addEventListener('click', function(e) {
         var allOrigins = document.querySelectorAll("*[data-origin]");
         for (i = 0; i < allOrigins.length; i++) {
             allOrigins[i].classList.remove("active");
         }
         var allTargets = document.querySelectorAll("*[data-target]");
         for (i = 0; i < allTargets.length; i++) {
             allTargets[i].style.display = "none";
         }
         var targets = document.querySelectorAll("*[data-target='"+e.target.dataset.origin+"']");
         for (i = 0; i < targets.length; i++) {
             targets[i].style.display = "block";
         }
         e.target.classList.add("active");
     });
 }
 origins[0].click(); //Show first tab

 
 $('#calendarFull').fullCalendar({
     header: {
         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay'
     },
     defaultDate: new Date(),
     navLinks: true, // can click day/week names to navigate views
     selectable: true,
     selectHelper: true,
     select: function(start, end) {
         var title = prompt('Event Title:');
         var eventData;
         if (title) {
             eventData = {
                 title: title,
                 start: start,
                 end: end
             };
             $('#calendarFull').fullCalendar('renderEvent', eventData, true); // stick? = true
         }
         $('#calendarFull').fullCalendar('unselect');
     },
     editable: true,
     eventLimit: true, // allow "more" link when too many events
     events: [
         {
             title: 'All Day Event',
             start: '2024-03-01'
         },
         {
             title: 'Long Event',
             start: '2024-03-07',
             end: '2024-03-10'
         },
         {
             id: 999,
             title: 'Repeating Event',
             start: '2024-03-09T16:00:00'
         },
         {
             id: 999,
             title: 'Repeating Event',
             start: '2024-03-16T16:00:00'
         },
         {
             title: 'Conference',
             start: '2024-03-11',
             end: '2024-03-13'
         },
         {
             title: 'Meeting',
             start: '2024-03-12T10:30:00',
             end: '2024-03-12T12:30:00'
         },
         {
             title: 'Lunch',
             start: '2024-03-12T12:00:00'
         },
         {
             title: 'Meeting',
             start: '2024-03-12T14:30:00'
         },
         {
             title: 'Happy Hour',
             start: '2024-03-12T17:30:00'
         },
         {
             title: 'Dinner',
             start: '2024-03-12T20:00:00'
         },
         {
             title: 'Birthday Party',
             start: '2024-03-13T07:00:00'
         },
         {
             title: 'Click for Search',
             url: 'http://google.com/',
             start: '2024-03-28'
         }
     ]
 })
    
 