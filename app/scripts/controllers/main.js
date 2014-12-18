'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'Platform',
    			'description': 'Cimande Workspace adalah dasar/pondasi dari sebuah aplikasi.',
    			'faClass': 'icon-dice',
                'link': '#platform'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Galeri App',
    			'description': 'Kami sedang mengembangkan beberapa proyek dan semua berdasarkan Cimande, platform dasar untuk mengembangkan aplikasi kita di masa depan.',
    			'faClass': 'icon-cogs',
                'link': '#appgallery'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Unduh',
    			'description': 'Anda bisa mendapatkan Cimande kami, dari url mirror kami.',
    			'faClass': 'icon-copy2',
                'link': '#downloads'
    		},
            {
                'image': 'images/bg2.jpg',
                'text': 'title',
                'title': 'Komunitas',
                'description': 'Kami sedang mengembangkan beberapa proyek dan semua berdasarkan Cimande, platform dasar untuk mengembangkan aplikasi kita di masa depan.',
                'faClass': 'icon-cogs',
                'link': '#community'
            },
            {
                'image': 'images/bg4.jpg',
                'text': 'title',
                'title': 'Inkubator',
                'description': ' ',
                'faClass': 'icon-cogs',
                'link': '#forum'
            }
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
