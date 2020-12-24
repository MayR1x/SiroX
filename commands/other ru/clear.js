module.exports = {
    name: "clear",
    code: `
    $deletecommand
    $onlyIf[$getServerVar[lang]==0;]
    $clear[$message]
    $cooldown[5s;**Попробуйте еще раз через %time%!**]
    $onlyPerms[admin;**Только для пользователей с правами Администратора**]
    $argsCheck[>1;**Введите коректное число!**]
    $onlyIf[$isNumber[$message]==true;**Это не число!**]
    $color[8e24aa]
    
  `
  };
  