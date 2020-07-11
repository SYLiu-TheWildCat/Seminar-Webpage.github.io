MathJax.Hub.Config({
    TeX:{
        equationnumbers: {autoNumber: "AMS" },
        Macros: {
            im: "{\\mathrm {im}}",
            dvol: "{\\mathrm {dvol}}",
            index: "{\\mathrm {index}}",
            Hom: "{\\mathrm {Hom}}",
            diff: "{\\mathrm {d}}",
            iIm: "{\\mathrm {Im}}",
            End: "{\\mathrm {End}}",
            Ind:"{\\mathrm {Ind}}",
        },
        "HTML-CSS" : {
            availableFonts : ["Latin Modern"],
            preferredFont : "Latin Modern",
            webFont : "STIX-Web",
            imageFont : null
        },
},
});

MathJax.Ajax.loadComplete("https://github.com/SYLiu-TheWildCat/Seminar-Webpage.github.io/blob/master/mathsetting.js");