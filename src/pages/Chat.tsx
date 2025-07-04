
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, User } from 'lucide-react';
import Header from '@/components/Header';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! Soy Jamito, tu asistente personal para encontrar lugares increíbles. ¿Qué tipo de lugar estás buscando hoy?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sampleResponses = [
    'Perfecto, para trabajar tranquilo te recomiendo estos cafés con buen WiFi y ambiente silencioso...',
    'Excelente elección para una cita romántica. Aquí tienes restaurantes íntimos con buena ambientación...',
    'Para salir en familia, estos lugares son ideales por su ambiente acogedor y menú variado...',
    'Para reunirse con amigos, estos bares y restaurantes tienen el ambiente perfecto...',
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickPrompts = [
    'Lugar para trabajar con buen WiFi',
    'Restaurante romántico para pareja',
    'Café para reunión de negocios',
    'Lugar familiar para almorzar',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Conversa con <span className="gradient-text">Jamito</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Cuéntame qué necesitas y te ayudo a encontrar el lugar perfecto
          </p>
        </div>

        <Card className="min-h-[600px] flex flex-col">
          <CardContent className="flex-1 p-6">
            <div className="flex flex-col h-full">
              <div className="flex-1 space-y-4 mb-6 overflow-y-auto max-h-96">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.isUser
                          ? 'gradient-bg text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {!message.isUser && (
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">J</span>
                          </div>
                          <span className="text-sm font-medium">Jamito</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      {message.isUser && (
                        <div className="flex items-center justify-end mt-2">
                          <User className="w-4 h-4 mr-1" />
                          <span className="text-xs">Tú</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-4 rounded-2xl">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {messages.length === 1 && (
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-3">Prueba con estas sugerencias:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quickPrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start h-auto p-3 text-left"
                        onClick={() => setInputValue(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje aquí..."
                  className="flex-1 h-12"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="h-12 px-6 gradient-bg hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
