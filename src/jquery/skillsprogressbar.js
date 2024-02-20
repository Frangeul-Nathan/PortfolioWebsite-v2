import $ from 'jquery';
import { useEffect } from 'react';

export const SkillProgressBar = () => {
  useEffect(() => {
    $(".skill-per").each(function () {
      var $this = $(this);
      var per = $this.attr("per");
      $this.css("width", per + "%");

      $({ animatedValue: 0 }).animate(
        { animatedValue: per },
        {
          duration: 1000,
          step: function () {
            $this.css("width", Math.floor(this.animatedValue) + "%");
          },
          complete: function () {
            $this.css("width", Math.floor(this.animatedValue) + "%");
            $this.attr("per", Math.floor(this.animatedValue) + "%");
          }
        }
      );
    });
  }, []); 
};

