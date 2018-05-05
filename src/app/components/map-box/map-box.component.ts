import {Component, ViewChild} from '@angular/core';
import {NavigatorComponent} from '../navigator/navigator.component';
import {MarkerComponent} from '../marker/marker.component';
import {MapService} from '../../services/map.service';
import {GeocodingService} from '../../services/geocoding.service';
import {Location} from '../../core/location.class';
import {LngLat, Map} from 'mapbox-gl';

@Component({
    selector: 'app',
    templateUrl: 'map-box.component.html',
    styleUrls: ['map-box.component.css'],
    providers: [MapService]
})
export class AppComponent {


    constructor(private mapService: MapService, private geocoder: GeocodingService) {
    }
    @ViewChild(MarkerComponent) markerComponent: MarkerComponent;

    ngOnInit() {

        let map = new Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 5,
            center: [-78.880453, 42.897852]
        });

        this.mapService.map = map;
    }

    ngAfterViewInit() {
        this.markerComponent.Initialize();
    }
}
