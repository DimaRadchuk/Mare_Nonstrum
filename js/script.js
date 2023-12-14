// season list

function createSelectSeasonList(obj) {
  // Create table data rows
  obj.reverse().forEach(function (game) {
    const dataRow = document.createElement("option");
    dataRow.classList.add("seasonItem");
    game.season.forEach((title) => {
      dataRow.textContent = title.title;
    });
    DOM.seasonList.appendChild(dataRow);
  });
}

const selectSeasonList = createSelectSeasonList(gameDate);

// math function

function getCountGamePlayer(name, obj, selectedSeason) {
  let gameCount = 0;
  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.forEach((games) => {
          games.players.forEach((player) => {
            if (player.player == name) {
              gameCount++;
            }
          });
        });
      }
    });
  });
  return gameCount;
}

function getCountWinGamePlayer(name, obj, selectedSeason) {
  let gameWinCount = 0;
  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.forEach((games) => {
          games.players.forEach((player) => {
            if (player.player == name && player.points == 1) {
              gameWinCount++;
            }
          });
        });
      }
    });
  });
  return gameWinCount;
}

function getWinRatingPlayers(player, obj, selectedSeason) {
  let gameRating = 0;
  let gameWinCount = getCountWinGamePlayer(player, obj, selectedSeason);
  let gameCount = getCountGamePlayer(player, obj, selectedSeason);
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
function createTableRatingPlayers(obj) {
  let selectedSeason = document.getElementById("season").value;

  let players = [];

  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.forEach((games) => {
          games.players.forEach((player) => {
            if (players.indexOf(player.player) === -1) {
              players.push(player.player);
            }
          });
        });
      }
    });
  });

  // Create table data rows
  players.forEach(function (player) {
    const dataRow = document.createElement("tr");
    dataRow.className = "player_rating_row";
    let dataCell = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCell[0].textContent = player;
    dataCell[1].textContent = getCountGamePlayer(player, obj, selectedSeason);
    dataCell[2].textContent = getCountWinGamePlayer(
      player,
      obj,
      selectedSeason
    );
    dataCell[3].textContent = getWinRatingPlayers(player, obj, selectedSeason);

    dataCell.forEach(function (cell) {
      dataRow.appendChild(cell);
    });
    DOM.playerRating.appendChild(dataRow);
  });
}

const tbodyPlayersRating = createTableRatingPlayers(gameDate);
// ----------------------------------------------------------------------------
// math function

function getCountGameFaction(name, obj, selectedSeason) {
  let gameCount = 0;
  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.forEach((games) => {
          games.players.forEach((faction) => {
            if (faction.faction == name) {
              gameCount++;
            }
          });
        });
      }
    });
  });
  return gameCount;
}

function getCountWinGameFaction(name, obj, selectedSeason) {
  let gameWinCount = 0;
  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.forEach((games) => {
          games.players.forEach((faction) => {
            if (faction.faction == name && faction.points == 1) {
              gameWinCount++;
            }
          });
        });
      }
    });
  });
  return gameWinCount;
}

function getWinRatingFaction(faction, obj, selectedSeason) {
  let gameRating = 0;
  let gameWinCount = getCountWinGameFaction(faction, obj, selectedSeason);
  let gameCount = getCountGameFaction(faction, obj, selectedSeason);
  if (gameWinCount != 0) {
    gameRating = ((gameWinCount / gameCount) * 100).toFixed(2);
  }
  gameRating += "%";
  return gameRating;
}

// faction table--------------------------------------------------------

function createTableRatingFactionRow(obj) {
  let selectedSeason = document.getElementById("season").value;
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
    dataCellFaction[0].textContent = getCountGameFaction(
      faction_name,
      obj,
      selectedSeason
    );
    dataCellFaction[1].textContent = getCountWinGameFaction(
      faction_name,
      obj,
      selectedSeason
    );
    dataCellFaction[2].textContent = getWinRatingFaction(
      faction_name,
      obj,
      selectedSeason
    );

    dataCellFaction.forEach(function (child) {
      child.className = "faction_rating_row";
      faction.appendChild(child);
    });
  });
}

const tbodyFactionRatingRow = createTableRatingFactionRow(gameDate);

// game list --------------------------------------------------------

function createTableListGame(obj) {
  let selectedSeason = document.getElementById("season").value;
  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.reverse().forEach(function (game) {
          const dateSpanGame = document.createElement("span");
          dateSpanGame.className = "game_list_block";
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
    });
  });
}

const tableGameList = createTableListGame(gameDate);

// onload = "sortTablePlayers(1); sortTablePlayers(3); sortTableFaction(3)";

/* update page */
$("select[id=season]").on("change", function () {
  const player = document.getElementsByClassName("player_rating_row");
  Array.from(player).forEach(function (item) {
    item.remove();
  });

  const faction = document.getElementsByClassName("faction_rating_row");
  Array.from(faction).forEach(function (item) {
    item.remove();
  });

  const block = document.getElementsByClassName("game_list_block");
  Array.from(block).forEach(function (item) {
    item.remove();
  });

  let tbodyPlayersRatingUpdate = createTableRatingPlayers(gameDate);
  let tbodyFactionRatingRowUpdate = createTableRatingFactionRow(gameDate);
  let tableGameListUpdate = createTableListGame(gameDate);

  sortTablePlayers(2);
  sortTablePlayers(3);
});
