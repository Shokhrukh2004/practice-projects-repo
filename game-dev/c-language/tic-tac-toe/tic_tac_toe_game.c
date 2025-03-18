#include <stdio.h>                     
#include <stdlib.h>
#include <ctype.h>
#include <time.h>

const char PLAYER = 'X';
const char COMPUTER = 'O';
const char PLAYER2 = 'O';
char board[3][3];

void resetBoard();
void printBoard();
int checkFreeSpaces()
void playerMove();
void computerMove();
char checkWinner();
void printWinner(char winner);
void playerMove2();

int main(){
    char winner = ' ';
    int play;
    printf("One player(1) or Two player(2): ");
    scanf("%d", &play);
    if(play == 1){
        resetBoard();
        while(checkFreeSpaces() != 0 || winner == ' '){
            printBoard();
            playerMove();
            winner = checkWinner();
            if(winner != ' ' || checkFreeSpaces() == 0){
                break;
            }

            computerMove();
            winner = checkWinner();
            if(winner != ' ' || checkFreeSpaces() == 0){
                break;
            }
        }
        printBoard();
        printWinner(winner);
    }else if(play == 2){
        resetBoard();
        while(checkFreeSpaces() != 0 || winner == ' '){
            printBoard();
            playerMove();
            winner = checkWinner();
            if(winner != ' ' || checkFreeSpaces() == 0){
                break;
            }
            
            printBoard();
            playerMove2();
            winner = checkWinner();
            if(winner != ' ' || checkFreeSpaces() == 0){
                break;
            }
        }
        printBoard();
        printWinner(winner);

    }

    return 0;
}

void resetBoard(){
    for(int i = 0;i<3;i++){
        for(int j = 0;j<3;j++){
            board[i][j] = ' ';
        }
    }
}
void printBoard(){
    printf("\n %c | %c | %c \n", board[0][0], board[0][1], board[0][2]);
    printf("---|---|---\n");
    printf(" %c | %c | %c \n", board[1][0], board[1][1], board[1][2]);
    printf("---|---|---\n");
    printf(" %c | %c | %c \n", board[2][0], board[2][1], board[2][2]);
    printf("\n");
}

int checkFreeSpaces(){
    int freespace = 9;
    for(int i=0;i<3;i++){
        for(int j =0;j<3; j++){
            if(board[i][j] != ' '){
                freespace--;
            }
        }
    }
    return freespace;
}

void playerMove(){
    int x, y;
    
    do{
        printf("Enter x coordinate (1 to 3): ");
        scanf("%d", &x);
        x--;
        printf("Enter y coordinate (1 to 3): ");
        scanf("%d", &y);
        y--;
        
        if(board[x][y] != ' '){
            printf("Space is not free! ");
        }
        else if(board[x][y] == ' '){
            board[x][y] = PLAYER;
            break;
        }
    }while(board[x][y] != ' ');
}
void computerMove(){
    srand(time(0));
    int x, y;
    do{
        x = rand() % 3;
        y = rand() % 3;
        
    }while(board[x][y] != ' ');
    board[x][y] = COMPUTER;
}
char checkWinner(){
    for(int i = 0; i<3;i++){
        if(board[i][0] == board[i][1] && board[i][0] == board[i][2]){
            return board[i][0]; 
        }
        else if(board[0][i] == board[1][i] && board[0][i] == board[2][i]){
            return board[0][i];
        }
        else if(board[0][0] == board[1][1] && board[0][0] == board[2][2]){
            return board[0][0];
        }
        else if(board[2][0] == board[1][1] && board[2][0] == board[0][2]){
            return board[2][0];
        }
    }
    return ' ';
}
void printWinner(char winner){
    if(winner == PLAYER){
        printf("Player(X) won the game!\n");
    }
    else if(winner == COMPUTER){
        printf("You lost the game!\n");
    }
    else if(winner == PLAYER2){
        printf("Player(O) won the game!\n");
    }
    else{
        printf("It is just a Draw!");
    }
}
void playerMove2(){
    int x, y;
    
    do{
        printf("Enter x coordinate (1 to 3): ");
        scanf("%d", &x);
        x--;
        printf("Enter y coordinate (1 to 3): ");
        scanf("%d", &y);
        y--;
        
        if(board[x][y] != ' '){
            printf("Space is not free! ");
        }
        else if(board[x][y] == ' '){
            board[x][y] = PLAYER2;
            break;
        }
    }while(board[x][y] != ' ');
}
