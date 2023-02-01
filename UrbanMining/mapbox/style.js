
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "dark_nolabels_0": {
            "type": "raster",
            "tiles": ["http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Copper_1": {
            "type": "geojson",
            "data": json_Copper_1
        }
                    ,
        "Steel_2": {
            "type": "geojson",
            "data": json_Steel_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_dark_nolabels_0_0",
            "type": "raster",
            "source": "dark_nolabels_0"
        },
        {
            "id": "lyr_Copper_1_0",
            "type": "fill",
            "source": "Copper_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'copper_max'], 0.01], ['<=', ['get', 'copper_max'], 1.162167]], 1.0, ['all', ['>', ['get', 'copper_max'], 1.162167], ['<=', ['get', 'copper_max'], 2.314333]], 1.0, ['all', ['>', ['get', 'copper_max'], 2.314333], ['<=', ['get', 'copper_max'], 3.4665]], 1.0, ['all', ['>', ['get', 'copper_max'], 3.4665], ['<=', ['get', 'copper_max'], 4.618667]], 1.0, ['all', ['>', ['get', 'copper_max'], 4.618667], ['<=', ['get', 'copper_max'], 5.771]], 1.0, ['all', ['>', ['get', 'copper_max'], 5.771], ['<=', ['get', 'copper_max'], 7.0]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'copper_max'], 0.01], ['<=', ['get', 'copper_max'], 1.162167]], '#fff5eb', ['all', ['>', ['get', 'copper_max'], 1.162167], ['<=', ['get', 'copper_max'], 2.314333]], '#fedbb7', ['all', ['>', ['get', 'copper_max'], 2.314333], ['<=', ['get', 'copper_max'], 3.4665]], '#fdac67', ['all', ['>', ['get', 'copper_max'], 3.4665], ['<=', ['get', 'copper_max'], 4.618667]], '#f67722', ['all', ['>', ['get', 'copper_max'], 4.618667], ['<=', ['get', 'copper_max'], 5.771]], '#d14501', ['all', ['>', ['get', 'copper_max'], 5.771], ['<=', ['get', 'copper_max'], 7.0]], '#7f2704', '#ffffff']}
        }
,
        {
            "id": "lyr_Steel_2_0",
            "type": "fill",
            "source": "Steel_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'max_steel'], 0.0], ['<=', ['get', 'max_steel'], 21.739125]], 1.0, ['all', ['>', ['get', 'max_steel'], 21.739125], ['<=', ['get', 'max_steel'], 43.47825]], 1.0, ['all', ['>', ['get', 'max_steel'], 43.47825], ['<=', ['get', 'max_steel'], 65.217375]], 1.0, ['all', ['>', ['get', 'max_steel'], 65.217375], ['<=', ['get', 'max_steel'], 86.9565]], 1.0, ['all', ['>', ['get', 'max_steel'], 86.9565], ['<=', ['get', 'max_steel'], 108.695625]], 1.0, ['all', ['>', ['get', 'max_steel'], 108.695625], ['<=', ['get', 'max_steel'], 130.43475]], 1.0, ['all', ['>', ['get', 'max_steel'], 130.43475], ['<=', ['get', 'max_steel'], 152.173875]], 1.0, ['all', ['>', ['get', 'max_steel'], 152.173875], ['<=', ['get', 'max_steel'], 173.913]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'max_steel'], 0.0], ['<=', ['get', 'max_steel'], 21.739125]], '#ffffcc', ['all', ['>', ['get', 'max_steel'], 21.739125], ['<=', ['get', 'max_steel'], 43.47825]], '#caeabf', ['all', ['>', ['get', 'max_steel'], 43.47825], ['<=', ['get', 'max_steel'], 65.217375]], '#93d5b6', ['all', ['>', ['get', 'max_steel'], 65.217375], ['<=', ['get', 'max_steel'], 86.9565]], '#5cc1c0', ['all', ['>', ['get', 'max_steel'], 86.9565], ['<=', ['get', 'max_steel'], 108.695625]], '#3ba6c1', ['all', ['>', ['get', 'max_steel'], 108.695625], ['<=', ['get', 'max_steel'], 130.43475]], '#2f87ba', ['all', ['>', ['get', 'max_steel'], 130.43475], ['<=', ['get', 'max_steel'], 152.173875]], '#295fa9', ['all', ['>', ['get', 'max_steel'], 152.173875], ['<=', ['get', 'max_steel'], 173.913]], '#253494', '#ffffff']}
        }
],
}