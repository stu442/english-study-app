'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Volume2, Plus } from 'lucide-react'

type Expression = {
  id: string
  text: string
  learned: boolean
}

export default function FlashcardPage() {
  const [expressions, setExpressions] = useState<Expression[]>([
    { id: '1', text: "It's raining cats and dogs.", learned: false },
    { id: '2', text: "Break a leg!", learned: false },
    { id: '3', text: "The ball is in your court.", learned: false },
    { id: '4', text: "To kill two birds with one stone.", learned: false },
    { id: '5', text: "A piece of cake.", learned: false },
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [newExpression, setNewExpression] = useState('')

  const handleLearn = () => {
    const updatedExpressions = [...expressions]
    updatedExpressions[currentIndex].learned = true
    setExpressions(updatedExpressions)
    setProgress(((updatedExpressions.filter(e => e.learned).length / expressions.length) * 100))
    if (currentIndex < expressions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleListen = () => {
    const expression = encodeURIComponent(expressions[currentIndex].text)
    window.open(`https://youglish.com/pronounce/${expression}/english?`)
  }

  const handleNextExpression = () => {
    if (currentIndex < expressions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePreviousExpression = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleAddExpression = () => {
    if (newExpression.trim()) {
      setExpressions([...expressions, { id: Date.now().toString(), text: newExpression, learned: false }])
      setNewExpression('')
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Learn Basic Expressions</h1>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Flashcard</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl font-semibold mb-4">{expressions[currentIndex].text}</p>
          <div className="flex justify-between items-center">
            <Button onClick={handlePreviousExpression} disabled={currentIndex === 0}>Previous</Button>
            <span>{currentIndex + 1} / {expressions.length}</span>
            <Button onClick={handleNextExpression} disabled={currentIndex === expressions.length - 1}>Next</Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleLearn} disabled={expressions[currentIndex].learned}>
            {expressions[currentIndex].learned ? 'Learned' : 'Learn'}
          </Button>
          <Button onClick={handleListen} variant="outline">
            <Volume2 className="mr-2 h-4 w-4" /> Listen on YouGlish
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Learning Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full" />
          <p className="text-center mt-2">{progress.toFixed(0)}% of today&apos;s learning goal achieved</p>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Create different sentences with this expression
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Expression</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-expression">New Expression</Label>
              <Input
                id="new-expression"
                value={newExpression}
                onChange={(e) => setNewExpression(e.target.value)}
                placeholder="Enter a new expression..."
              />
            </div>
            <Button onClick={handleAddExpression}>Add Expression</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}