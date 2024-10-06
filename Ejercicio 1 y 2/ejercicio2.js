   let h1 = document.getElementsByTagName('h1')[0];;

    h1.addEventListener("click", function() {
        mostrarModal();
    });

    function mostrarModal() {
        let modalOverlay = document.createElement("div");
        modalOverlay.style.position = "fixed";
        modalOverlay.style.top = "5%";
        modalOverlay.style.left = "50%";
        
        document.body.appendChild(modalOverlay);

        const modal = document.createElement("div");
        modal.style.backgroundColor = "white";
        modal.style.padding = "20px";
        modal.style.width = "300px";
        modalOverlay.appendChild(modal);

        const closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.cursor = "pointer";
        closeButton.style.fontSize = "20px";
        modal.appendChild(closeButton);

        closeButton.addEventListener("click", function() {
            document.body.removeChild(modalOverlay);
        });

        let form = document.createElement("form");
        let input = document.createElement("input");
        input.type = "text";
        input.style.color = "black";
        input.style.marginTop = "10px";
        form.appendChild(input);

        let submitButton = document.createElement("button");
        submitButton.textContent = "Enviar";
        submitButton.style.marginTop = "10px";
        submitButton.type = "submit";
        form.appendChild(submitButton);

        modal.appendChild(form);

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let valor = input.value.toLowerCase();

            if (valor === "frutas" || valor === "verduras") {
               if (valor === "frutas"){
                CategoriaFrutas();
               }
               if (valor === "verduras"){
                CategoriaVerduras();
               }
                
                document.body.removeChild(modalOverlay);
            } else {
                alert("Por favor introduce un nombre correcto.");
            }
        });
    }