document.getElementById('tabelaDados').innerHTML = `
<thead>
    <tr class="table-primary p-0 m-0 ">
        <th class="col" scope="col"> <button class="btn "><</button> Dia <button class="btn">></button></th>
        <th class="col" scope="col">Total agendamentos</th>
        <th class="col" scope="col">Total de atendimentos</th>
        <th class="col" scope="col">Tempo médio por atendimento</th>
        <th class="col" scope="col">Atendimentos por hora</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row" id="dia">24/04/2024</th>
            <td id="tAgendamentos">123</td>
            <td id="tAtendimentos">114</td>
            <td id="tempoMedio">00:06:23</td>
            <td id="atendiHora">10/h</td>
        </tr>
    </tbody>
`
