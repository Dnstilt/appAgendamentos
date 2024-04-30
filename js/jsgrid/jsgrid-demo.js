/*=============JsGrid Basic Scenario Table==========================*/
    
var clients = [
    { "Nome": "Otto Clay", "Horário": "10/05/2024 09:25:00", "Situacao": "Agendado"},
    { "Nome": "Otto Clay", "Horário": "15/05/2024 15:10:00", "Situacao": "Agendado"},
    { "Nome": "Otto Clay", "Horário": "12/04/2024 11:25:00", "Situacao": "Agendado"},
    { "Nome": "Otto Clay", "Horário": "25/03/2024 10:10:00", "Situacao": "Agendado"},
    { "Nome": "Otto Clay", "Horário": "02/05/2024 16:05:00", "Situacao": "Agendado"},

];

var countries = [
    { Name: "", Id: 0 },
    { Name: "United States", Id: 1 },
    { Name: "Canada", Id: 2 },
    { Name: "United Kingdom", Id: 3 }
];

$("#jsGrid").jsGrid({
    width: "100%",
    height: "500px",

    inserting: false,
    editing: false,
    sorting: false,
    paging: true,

    data: clients,

    fields: [
        { name: "Nome", type: "text", width: 50, validate: "required" },
        { name: "Horário", type: "text", width: 50, validate: "required"},
        { name: "Situacao", type: "text", width: 50},
        { type: "control" }
    ]
});

/*============JsGrid Basic Scenario Table==========================*/


