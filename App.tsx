import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Users, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-2xl"
      >
        <div className="bg-primary p-8 text-primary-foreground text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm mb-2"
          >
            <Terminal className="h-10 w-10 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight">Vibe Coding - Serviço Público</h1>
          <p className="text-primary-foreground/80 max-w-md mx-auto">
            Seu ambiente Antigravity está pronto para transformar o serviço público através da IA.
          </p>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4 p-4 rounded-xl bg-muted/50 border border-border/50">
            <Code2 className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Código Limpo</h3>
              <p className="text-sm text-muted-foreground">Estrutura pronta para escalabilidade.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 rounded-xl bg-muted/50 border border-border/50">
            <Sparkles className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">IA Integrada</h3>
              <p className="text-sm text-muted-foreground">Otimizado para o Antigravity.</p>
            </div>
          </div>
        </div>

        <div className="border-t p-6 bg-muted/30 flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2 text-primary font-medium">
            <Users className="h-5 w-5" />
            <span>Comunidade GPTGOV</span>
          </div>
          <p className="text-xs text-muted-foreground">
            React • TypeScript • Tailwind • Framer Motion
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default App;