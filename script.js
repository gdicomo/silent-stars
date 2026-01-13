let planetData = {};

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    planetData = data;
    document.querySelectorAll('.planet').forEach(planet => {
      planet.addEventListener('click', () => {
        const name = planet.dataset.planet;
        loadPlanetInfo(name);
      });
    });
  });

function loadPlanetInfo(name) {
  const info = planetData[name];
  document.getElementById('planet-name').textContent = name;
  document.getElementById('planet-system').textContent = "System: " + info.system;
  document.getElementById('planet-status').textContent = "Status: " + info.status;
  document.getElementById('planet-physical').textContent = "Physical Characteristics: " + info.physical;
  document.getElementById('planet-history').textContent = "History: " + info.history;
  document.getElementById('planet-recent').textContent = "Post-Blackout: " + info.post_blackout;

  const logList = document.getElementById('adventure-log');
  logList.innerHTML = '';
  info.adventure_log.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = entry;
    logList.appendChild(li);
  });

  const missionsList = document.getElementById('missions');
  missionsList.innerHTML = '';
  info.missions.forEach(mission => {
    const li = document.createElement('li');
    li.textContent = mission;
    missionsList.appendChild(li);
  });
}


