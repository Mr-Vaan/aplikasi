import{r as e}from"./p-eda63047.js";import"./p-fd4ad57a.js";export default function(a){var d,o,s,i,r,_,l,t,n,p,v;if("undefined"!=typeof learndash_video_data&&"presto"===(null===(d=learndash_video_data)||void 0===d?void 0:d.videos_found_provider)){if(e(a),window.learndash_video_data.videos_auto_complete="on"===(null===(o=prestoPlayer)||void 0===o||null===(s=o.learndash)||void 0===s?void 0:s.lesson_video_auto_complete),window.learndash_video_data.videos_hide_complete_button="AFTER"===(null===(i=learndash_video_data)||void 0===i?void 0:i.videos_shown)&&"on"===(null===(r=prestoPlayer)||void 0===r||null===(_=r.learndash)||void 0===_?void 0:_.lesson_video_hide_complete_button),window.learndash_video_data.videos_auto_complete_delay=null===(l=prestoPlayer)||void 0===l||null===(t=l.learndash)||void 0===t?void 0:t.lesson_video_auto_complete_delay,window.learndash_video_data.videos_auto_complete_delay_message=null===(n=prestoPlayer)||void 0===n||null===(p=n.learndash)||void 0===p?void 0:p.videos_auto_complete_delay_message,window.learndash_video_data.video_track_path="/","BEFORE"===(null===(v=learndash_video_data)||void 0===v?void 0:v.videos_shown))return learndash_video_data.videos_auto_complete=!1,jQuery(document).trigger("learndash_video_disable_assets",[!0]),void jQuery((function(){"1"===learndash_video_data.video_debug&&console.log("PRESTO: init"),document.querySelectorAll('presto-player[data-video-progression="true"][data-video-provider="'+learndash_video_data.videos_found_provider+'"]').length&&("1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(true)"),LearnDash_disable_assets(!0),LearnDash_watchPlayers(),document.querySelectorAll('presto-player[data-video-progression="true"][data-video-provider="'+learndash_video_data.videos_found_provider+'"]').forEach((function(e,a){var d="presto-player__wrapper-player-"+a,o=e.getAttribute("id");void 0!==o&&""!=o||e.setAttribute("id",o=d),ld_video_players[d]={},ld_video_players[d].player_key=d,ld_video_players[d].player_type=learndash_video_data.videos_found_provider,ld_video_players[d].player_id=o,ld_video_players[d].player_wrapper=e.closest("presto-player"),void 0!==ld_video_players[d].player_wrapper?ld_video_players[d].player_cookie_key=ld_video_players[d].player_wrapper.getAttribute("data-video-cookie-key"):ld_video_players[d].player_cookie_key="",ld_video_players[d].player_cookie_values=LearnDash_Video_Progress_initSettings(ld_video_players[d]),"complete"===LearnDash_Video_Progress_getSetting(ld_video_players[d],"video_state")?(LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd()):(wp.hooks.addAction("presto.playerTimeUpdate","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is playing"),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_duration",e.duration),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_time",e.currentTime),e.duration&&e.duration===e.currentTime&&(LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_state","complete"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(false)"),LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd())})),wp.hooks.addAction("presto.playerPlaying","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is playing"),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_duration",e.duration),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_time",e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_state","play")})),wp.hooks.addAction("presto.playerPause","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is paused"),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_time",e.currentTime),console.log(e.duration),console.log(e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_state","pause")})),wp.hooks.addAction("presto.playerEnded","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: video ended"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: setting 'video_state' to 'complete'"),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_time",e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[d],"video_state","complete"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(false)"),LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd()})))})))}));window.LearnDash_disable_assets(!0),wp.hooks.addAction("presto.playerEnded","presto-player",(function(){window.LearnDash_disable_assets(!1)}))}}