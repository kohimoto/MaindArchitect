$(function(){
   // #�Ŏn�܂�A���J�[���N���b�N�����ꍇ�ɏ���
   $('li a[href^=#]').click(function() {
   $('body').removeClass('menu-show');
      // �X�N���[���̑��x
      var speed = 700; // �~���b
      // �A���J�[�̒l�擾
      var href= $(this).attr("href");
      // �ړ�����擾
      var target = $(href == "#" || href == "" ? 'html' : href);
      // �ړ���𐔒l�Ŏ擾
      var position = target.offset().top;
      // �X���[�X�X�N���[��
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
