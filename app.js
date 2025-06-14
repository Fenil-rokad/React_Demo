 const h1 = React.createElement("h1", {}, "Hii, h1");
        const h2 = React.createElement("h2", {}, "Hii, h2");
        const h3 = React.createElement("h2", {}, "Hii, h3");
        const h4 = React.createElement("h4", {}, "Hii, h4");
        const h5 = React.createElement("h5", {}, "Hii, h5");
        const h6 = React.createElement("h6", {}, "Hii, h6");

        const img = React.createElement("img", { src: "https://fastly.picsum.photos/id/923/536/354.jpg?hmac=N40itV6JyPJOXi8egJdNP0fXRteuorTKOitNJ2hfVxw" });

        const tbl = React.createElement("table", { border: "2px" },
            React.createElement("thead", {},
                React.createElement("tr", {},
                    React.createElement("th", {}, "Name"),
                    React.createElement("th", {}, "Age")
                )
            ),

            React.createElement("tbody", {},
                React.createElement("tr", {},
                    React.createElement("td", {}, "Fenil"),
                    React.createElement("td", {}, "20")
                )
            )
        )
        

        const form = React.createElement("form", {},

            React.createElement("label", { for: "name" }, "Enter Name"),
            React.createElement("input", { type: "text", placeholder: "Name", id: "name" }),
            React.createElement("button", { type: "submit" }, "submit")
        )

        const Div = document.getElementById("root");
        const root = ReactDOM.createRoot(Div);

        const DivHeading = React.createElement("div", {}, [h1, h2, h3, h4, h5, h6, img, tbl, form]);
        root.render(DivHeading);