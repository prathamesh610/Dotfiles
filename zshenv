typeset -U PATH path
path=("$HOME/.local/bin" "$HOME/flutter/bin" "$HOME/Android/Sdk" "$HOME/development/fortunes" "$path[@]" )
export PATH
alias nvidia_select="sudo systemctl start optimus-manager;prime-offload; optimus-manager --switch nvidia --no-confirm"
alias intel_select="sudo systemctl start optimus-manager;prime-offload; optimus-manager --switch intel --no-confirm"
alias ls="ls -la"
alias spotify="env LD_PRELOAD=/usr/lib/spotify-adblock.so spotify %U"
alias pacman_remove="sudo pacman -Rsn $(pacman -Qdtq)"
alias clear="clear;neofetch | lolcat"
alias cowsays="fortune /home/prathamesh/development/fortunes/fortunes | cowsay | lolcat"
alias start_xampp="sudo xampp startapache;sudo systemctl stop mariadb; sudo xampp startmysql"
alias stop_xampp="sudo xampp stopapache;sudo xampp stopmysql"

