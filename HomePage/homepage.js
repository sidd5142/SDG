app.controller("HomePageController", function ($scope, $http, $window, $state) {
  $scope.total = [];

  //   $http
  //     .get(api + "mapdata/", {
  //       // withCredentials:true
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //       var data = response.data;
  //       var totalDoctor = data.total_doctor;
  //       var totalPatient = data.total_patient;
  //       var totalDepartments = data.total_departments;
  //       var totalAppointments = data.total_appointments;

  //       const xValues = ["Doctor", "Patient", "Appointment", "Department"];
  //       const yValues = [
  //         totalDoctor,
  //         totalPatient,
  //         totalAppointments,
  //         totalDepartments,
  //       ];
  //       const barColors = ["red", "green", "blue", "orange"];

  //       new Chart("myChart", {
  //         type: "bar",
  //         data: {
  //           labels: xValues,
  //           datasets: [
  //             {
  //               backgroundColor: barColors,
  //               data: yValues,
  //             },
  //           ],
  //         },
  //         options: {
  //           legend: { display: false },
  //           title: {
  //             display: true,
  //             text: "Hospital Data",
  //           },
  //         },
  //       });

  //       //   PIE CHART

  //       var options = {
  //         series: yValues,
  //         chart: {
  //           width: 380,
  //           type: "donut",
  //           dropShadow: {
  //             enabled: true,
  //             color: "#111",
  //             top: -1,
  //             left: 3,
  //             blur: 3,
  //             opacity: 0.2,
  //           },
  //         },
  //         stroke: {
  //           width: 0,
  //         },
  //         plotOptions: {
  //           pie: {
  //             donut: {
  //               labels: {
  //                 show: true,
  //                 total: {
  //                   showAlways: true,
  //                   show: true,
  //                 },
  //               },
  //             },
  //           },
  //         },
  //         labels: xValues,
  //         dataLabels: {
  //           dropShadow: {
  //             blur: 3,
  //             opacity: 0.8,
  //           },
  //         },
  //         fill: {
  //           type: "pattern",
  //           opacity: 1,
  //           pattern: {
  //             enabled: true,
  //             style: [
  //               "verticalLines",
  //               "squares",
  //               "horizontalLines",
  //               "circles",
  //               "slantedLines",
  //             ],
  //           },
  //         },
  //         states: {
  //           hover: {
  //             filter: "none",
  //           },
  //         },
  //         theme: {
  //           palette: "palette2",
  //         },
  //         title: {
  //           text: "Hospital Data",
  //         },
  //         responsive: [
  //           {
  //             breakpoint: 480,
  //             options: {
  //               chart: {
  //                 width: 200,
  //               },
  //               legend: {
  //                 position: "bottom",
  //               },
  //             },
  //           },
  //         ],
  //       };

  //       var chart = new ApexCharts(document.querySelector("#chart"), options);
  //       chart.render();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
});
