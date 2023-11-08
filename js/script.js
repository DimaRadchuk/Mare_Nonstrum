// math function

function getCountGamePlayer(name, obj) {
  let gameCount = 0;
  obj.forEach((games) => {
    games.players.forEach((player) => {
      if (player.player == name) {
        gameCount++;
      }
    });
  });
  return gameCount;
}

function getCountWinGamePlayer(name, obj) {
  let gameWinCount = 0;
  obj.forEach((games) => {
    games.players.forEach((player) => {
      if (player.player == name && player.points == 1) {
        gameWinCount++;
      }
    });
  });
  return gameWinCount;
}

function getWinRatingPlayers(player, obj) {
  let gameRating = 0;
  let gameWinCount = getCountWinGamePlayer(player, obj);
  let gameCount = getCountGamePlayer(player, obj);
  if (gameWinCount != 0 && gameCount > 2) {
    gameRating = ((gameWinCount / gameCount) * 100).toFixed(2);
    gameRating += "%";
  } else if (gameCount < 3) {
    gameRating = "-";
  } else {
    gameRating += "%";
  }

  return gameRating;
}

// players table--------------------------------------------------------

function createTableRatingPlayers(players, obj) {
  // Create table data rows
  players.forEach(function (player) {
    const dataRow = document.createElement("tr");

    let dataCell = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCell[0].textContent = player;
    dataCell[1].textContent = getCountGamePlayer(player, obj);
    dataCell[2].textContent = getCountWinGamePlayer(player, obj);
    dataCell[3].textContent = getWinRatingPlayers(player, obj);

    dataCell.forEach(function (cell) {
      dataRow.appendChild(cell);
    });
    DOM.playerRating.appendChild(dataRow);
  });
}

const tbodyPlayersRating = createTableRatingPlayers(players, gameDate);
// ----------------------------------------------------------------------------
// math function

function getCountGameFaction(name, obj) {
  let gameCount = 0;
  obj.forEach((games) => {
    games.players.forEach((faction) => {
      if (faction.faction == name) {
        gameCount++;
      }
    });
  });
  return gameCount;
}

function getCountWinGameFaction(name, obj) {
  let gameWinCount = 0;
  obj.forEach((games) => {
    games.players.forEach((faction) => {
      if (faction.faction == name && faction.points == 1) {
        gameWinCount++;
      }
    });
  });
  return gameWinCount;
}

function getWinRatingFaction(faction, obj) {
  let gameRating = 0;
  let gameWinCount = getCountWinGameFaction(faction, obj);
  let gameCount = getCountGameFaction(faction, obj);
  if (gameWinCount != 0) {
    gameRating = ((gameWinCount / gameCount) * 100).toFixed(2);
  }
  gameRating += "%";
  return gameRating;
}

// faction table--------------------------------------------------------

function createTableRatingFactionRow(obj) {
  const factionsRow = document.getElementsByClassName(
    "faction_rating_table_tr"
  );

  Array.from(factionsRow).forEach(function (faction, i) {
    let dataCellFaction = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    faction_name = document.getElementsByClassName("faction_rating_table_name")[
      i
    ].textContent;
    dataCellFaction[0].textContent = getCountGameFaction(faction_name, obj);
    dataCellFaction[1].textContent = getCountWinGameFaction(faction_name, obj);
    dataCellFaction[2].textContent = getWinRatingFaction(faction_name, obj);

    dataCellFaction.forEach(function (child) {
      faction.appendChild(child);
    });
  });
}

const tbodyFactionRatingRow = createTableRatingFactionRow(gameDate);

// game list --------------------------------------------------------

function createTableListGame(obj) {
  obj.reverse().forEach(function (game) {
    const dateSpanGame = document.createElement("span");
    const dateGameDate = document.createElement("h2");
    dateGameDate.innerHTML = game.date;
    dateSpanGame.appendChild(dateGameDate);
    DOM.gameListAll.appendChild(dateSpanGame);

    // Create table data rows
    const dataTable = document.createElement("table");
    const dateThead = document.createElement("thead");

    // Create thead
    let dateTheadTh = [
      document.createElement("th"),
      document.createElement("th"),
      document.createElement("th"),
    ];
    dateTheadTh[0].textContent = "Гравці";
    dateTheadTh[1].textContent = "Фракція";
    dateTheadTh[2].textContent = "Переможець";

    // Add thed for table
    dateTheadTh.forEach(function (cell) {
      dateThead.appendChild(cell);
    });

    dataTable.appendChild(dateThead);

    const dateTbody = document.createElement("tbody");

    game.players.forEach(function (player) {
      const dateGameRow = document.createElement("tr");
      let dataGameCell = [
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
      ];
      dataGameCell[0].textContent = player.player;
      dataGameCell[1].textContent = player.faction;
      dataGameCell[2].textContent = player.points;

      if (player.points == 1) {
        dateGameRow.className = "game_list_win";
      }

      dataGameCell.forEach(function (cell) {
        dateGameRow.appendChild(cell);
      });
      dateTbody.appendChild(dateGameRow);
    });
    dataTable.appendChild(dateTbody);
    dateSpanGame.appendChild(dataTable);
    const dateGameDesc = document.createElement("h3");
    dateGameDesc.textContent = game.description;
    dateSpanGame.appendChild(dateGameDesc);
    DOM.gameListAll.appendChild(dateSpanGame);
  });
}

const tableGameList = createTableListGame(gameDate);
