// $(document).ready(function() {
//     $('#reservation').daterangepicker({
//         timePicker: true,
//         timePickerIncrement: 30,
//         format: 'MM/DD/YYYY h:mm A'
//       }, function(start, end, label) {
//         console.log(start.toISOString(), end.toISOString(), label);
//       });
//  });


laydate.render({
  elem: '#reservation'
  ,range: true
});
