document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        // Contoh event awal
        {
          title: 'Meeting',
          start: '2024-06-10T10:30:00',
          end: '2024-06-10T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2024-06-12T12:00:00'
        },
        {
          title: 'Conference',
          start: '2024-06-13',
          end: '2024-06-15'
        },
        // Menambahkan kegiatan baru
        {
          title: 'Liburan',
          start: '2024-07-13',
          end: '2024-07-25'
        },
        {
          title: 'Workshop',
          start: '2024-08-01T09:00:00',
          end: '2024-08-01T17:00:00'
        },
        {
          title: 'Exam',
          start: '2024-08-15',
          end: '2024-08-16'
        }
      ],
      selectable: true,
      select: function(info) {
        var title = prompt('Masukkan judul kegiatan:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: info.startStr,
            end: info.endStr,
            allDay: info.allDay
          });
        }
        calendar.unselect();
      },
      editable: true,
      eventClick: function(info) {
        if (confirm("Apakah Anda ingin menghapus kegiatan ini?")) {
          info.event.remove();
        }
      }
    });
  
    calendar.render();
  });
  