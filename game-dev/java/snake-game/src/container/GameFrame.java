package container;

import javax.swing.JFrame;

public class GameFrame extends JFrame{

	GameFrame(){
		
		GamePanel panel = new GamePanel();
		
		this.add(panel);
		this.setDefaultCloseOperation(this.EXIT_ON_CLOSE);
		this.setResizable(false);
		this.setTitle("Snake");
		this.setVisible(true);
		this.pack();
		this.setLocationRelativeTo(null);
	}

}
