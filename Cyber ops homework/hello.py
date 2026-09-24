import random


def get_choices():
    player_choice = input("Enter your choice (rock, paper, scissors): ").strip().lower()
    options = ["rock", "paper", "scissors"]
    computer_choice = random.choice(options)
    return {"player": player_choice, "computer": computer_choice}


def check_win(player, computer):
    print(f"You chose {player}, computer chose {computer}.")
    if player == computer:
        return "It's a tie!"
    elif (
        (player == "rock" and computer == "scissors")
        or (player == "paper" and computer == "rock")
        or (player == "scissors" and computer == "paper")
    ):
        return "You win!"
    else:
        return "You lose!"


if __name__ == "__main__":
    choices = get_choices()
    result = check_win(choices["player"], choices["computer"])
    print(result)