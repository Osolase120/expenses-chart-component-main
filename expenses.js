
      const barChart = document.getElementById("barChart");

      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          const maxAmount = Math.max(...data.map((item) => item.amount));

          data.forEach((item) => {
            const bar = document.createElement("div");
            const height = (item.amount / maxAmount) * 160;
            bar.style.height = `${height}px`;
            bar.classList.add("bar");
            if (item.amount === maxAmount) {
              bar.classList.add("bar-max");
            }
            const fig = document.createElement("span");
            fig.classList.add("fig-bg");
            fig.textContent = `$${item.amount}`;
            bar.appendChild(fig);
            barChart.appendChild(bar);
          });
        });
