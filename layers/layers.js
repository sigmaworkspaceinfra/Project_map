var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WaterSupplyDrinkingWorks_1 = new ol.format.GeoJSON();
var features_WaterSupplyDrinkingWorks_1 = format_WaterSupplyDrinkingWorks_1.readFeatures(json_WaterSupplyDrinkingWorks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterSupplyDrinkingWorks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterSupplyDrinkingWorks_1.addFeatures(features_WaterSupplyDrinkingWorks_1);
var lyr_WaterSupplyDrinkingWorks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterSupplyDrinkingWorks_1, 
                style: style_WaterSupplyDrinkingWorks_1,
                popuplayertitle: "Water Supply Drinking Works",
                interactive: false,
                title: '<img src="styles/legend/WaterSupplyDrinkingWorks_1.png" /> Water Supply Drinking Works'
            });
var format_Architectural3DMapping_2 = new ol.format.GeoJSON();
var features_Architectural3DMapping_2 = format_Architectural3DMapping_2.readFeatures(json_Architectural3DMapping_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Architectural3DMapping_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Architectural3DMapping_2.addFeatures(features_Architectural3DMapping_2);
var lyr_Architectural3DMapping_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Architectural3DMapping_2, 
                style: style_Architectural3DMapping_2,
                popuplayertitle: "Architectural 3D Mapping",
                interactive: false,
                title: '<img src="styles/legend/Architectural3DMapping_2.png" /> Architectural 3D Mapping'
            });
var format_CityDevelopmentPlanCitySanitationPlan_3 = new ol.format.GeoJSON();
var features_CityDevelopmentPlanCitySanitationPlan_3 = format_CityDevelopmentPlanCitySanitationPlan_3.readFeatures(json_CityDevelopmentPlanCitySanitationPlan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityDevelopmentPlanCitySanitationPlan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityDevelopmentPlanCitySanitationPlan_3.addFeatures(features_CityDevelopmentPlanCitySanitationPlan_3);
var lyr_CityDevelopmentPlanCitySanitationPlan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityDevelopmentPlanCitySanitationPlan_3, 
                style: style_CityDevelopmentPlanCitySanitationPlan_3,
                popuplayertitle: "City Development Plan & City Sanitation Plan",
                interactive: false,
                title: '<img src="styles/legend/CityDevelopmentPlanCitySanitationPlan_3.png" /> City Development Plan & City Sanitation Plan'
            });
var format_SolarEnergy_4 = new ol.format.GeoJSON();
var features_SolarEnergy_4 = format_SolarEnergy_4.readFeatures(json_SolarEnergy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolarEnergy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolarEnergy_4.addFeatures(features_SolarEnergy_4);
var lyr_SolarEnergy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolarEnergy_4, 
                style: style_SolarEnergy_4,
                popuplayertitle: "Solar Energy ",
                interactive: false,
                title: '<img src="styles/legend/SolarEnergy_4.png" /> Solar Energy '
            });
var format_UndergroundDrainageScheme_5 = new ol.format.GeoJSON();
var features_UndergroundDrainageScheme_5 = format_UndergroundDrainageScheme_5.readFeatures(json_UndergroundDrainageScheme_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UndergroundDrainageScheme_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UndergroundDrainageScheme_5.addFeatures(features_UndergroundDrainageScheme_5);
var lyr_UndergroundDrainageScheme_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UndergroundDrainageScheme_5, 
                style: style_UndergroundDrainageScheme_5,
                popuplayertitle: "Underground Drainage Scheme",
                interactive: false,
                title: '<img src="styles/legend/UndergroundDrainageScheme_5.png" /> Underground Drainage Scheme'
            });
var format_HydraulicModelStudies_6 = new ol.format.GeoJSON();
var features_HydraulicModelStudies_6 = format_HydraulicModelStudies_6.readFeatures(json_HydraulicModelStudies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HydraulicModelStudies_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HydraulicModelStudies_6.addFeatures(features_HydraulicModelStudies_6);
var lyr_HydraulicModelStudies_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HydraulicModelStudies_6, 
                style: style_HydraulicModelStudies_6,
                popuplayertitle: "Hydraulic Model Studies",
                interactive: true,
                title: '<img src="styles/legend/HydraulicModelStudies_6.png" /> Hydraulic Model Studies'
            });
var group_Dump = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Dump"});
var group_datawithsymbols = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "data with symbols"});

lyr_OpenStreetMap_0.setVisible(true);lyr_WaterSupplyDrinkingWorks_1.setVisible(true);lyr_Architectural3DMapping_2.setVisible(true);lyr_CityDevelopmentPlanCitySanitationPlan_3.setVisible(true);lyr_SolarEnergy_4.setVisible(true);lyr_UndergroundDrainageScheme_5.setVisible(true);lyr_HydraulicModelStudies_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WaterSupplyDrinkingWorks_1,lyr_Architectural3DMapping_2,lyr_CityDevelopmentPlanCitySanitationPlan_3,lyr_SolarEnergy_4,lyr_UndergroundDrainageScheme_5,lyr_HydraulicModelStudies_6];
lyr_WaterSupplyDrinkingWorks_1.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_Architectural3DMapping_2.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_CityDevelopmentPlanCitySanitationPlan_3.set('fieldAliases', {'Descri.': 'Descri.', 'Name': 'Name', });
lyr_SolarEnergy_4.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_UndergroundDrainageScheme_5.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', });
lyr_HydraulicModelStudies_6.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', 'Photos': 'Photos', 'Photo': 'Photo', });
lyr_WaterSupplyDrinkingWorks_1.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', });
lyr_Architectural3DMapping_2.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', });
lyr_CityDevelopmentPlanCitySanitationPlan_3.set('fieldImages', {'Descri.': 'TextEdit', 'Name': 'TextEdit', });
lyr_SolarEnergy_4.set('fieldImages', {'Name': '', 'Descri.': 'TextEdit', });
lyr_UndergroundDrainageScheme_5.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', });
lyr_HydraulicModelStudies_6.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', 'Photos': 'ExternalResource', 'Photo': 'ExternalResource', });
lyr_WaterSupplyDrinkingWorks_1.set('fieldLabels', {'Name': 'no label', 'Descri.': 'no label', });
lyr_Architectural3DMapping_2.set('fieldLabels', {'Name': 'no label', 'Descri.': 'no label', });
lyr_CityDevelopmentPlanCitySanitationPlan_3.set('fieldLabels', {'Descri.': 'inline label - always visible', 'Name': 'no label', });
lyr_SolarEnergy_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Descri.': 'inline label - always visible', });
lyr_UndergroundDrainageScheme_5.set('fieldLabels', {'Name': 'no label', 'Descri.': 'no label', });
lyr_HydraulicModelStudies_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'Descri.': 'inline label - visible with data', 'Photos': 'inline label - always visible', 'Photo': 'inline label - always visible', });
lyr_HydraulicModelStudies_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});