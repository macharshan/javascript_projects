const contents = document.querySelector(`#contents`)

addEventListener(`keydown`, function (e) {
    contents.innerHTML = `
    <table>
        <tr>
            <th>key</th>
            <th>keyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key == ` ` ? "space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
}, false)