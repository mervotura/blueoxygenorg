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
    			'faClass': 'icon-stack',
                'link': '#platform'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Galeri App',
    			'description': 'Kami sedang mengembangkan beberapa proyek dan semua berdasarkan Cimande, platform dasar untuk mengembangkan aplikasi kita di masa depan.',
    			'faClass': 'icon-images',
                'link': '#appgallery'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Unduh',
    			'description': 'Anda bisa mendapatkan Cimande kami, dari url mirror kami.',
    			'faClass': 'icon-download',
                'link': '#downloads'
    		},
            {
                'image': 'images/bg4.jpg',
                'text': 'title',
                'title': 'Komunitas',
                'description': 'Kami sedang mengembangkan beberapa proyek dan semua berdasarkan Cimande, platform dasar untuk mengembangkan aplikasi kita di masa depan.',
                'faClass': 'icon-users2',
                'link': '#community'
            },
            {
                'image': 'images/bg5.jpg',
                'text': 'title',
                'title': 'Inkubator',
                'description': 'Berbagai aplikasi yang dibuat oleh siswa magang dan  mahasiswa kerja praktek di Meruvian.',
                'faClass': 'icon-home3',
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
