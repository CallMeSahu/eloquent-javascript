# Vocabulary List
## Chapter 0: Introduction
1. **Programming:** is the act of constructing a program—a set of precise instructions telling a computer what to do.
1. **Programming Language:** is an artificially constructed language used to instruct computers.
1. **Best Practices:** a composed set of rules, prescribing the form programs should have.
1. **Vanilla JavaScript:** what comes with JS - "out of the box". We don't require to install or import anything to use functionalities that comes with VanillaJS.
1. **ECMAScript:** a standardized version of JS - interchangeable with name "JavaScript".
1. **NodeJS:** an environment for running JS outside of the browser.
1. **MongoDB/CouchDB:** two databases which use JS as the scripting and query languages.
## Chapter 1: Types, Values and Operators
1. **Code:** the text that makes up programs.
1. **Bits:** are any kind of two-valued things, usually described as zeros and ones.
1. **Value:** a chunk of information (in this case, in a JavaScript environment).
1. **Number:** a numeric type of value.
1. **Operators (e.g. +,-,*,/,%):** Putting an operator between two values will apply it to those values and produce a new value.
1. **Modulo:** an arithmetic operator which gives the remainder after dividing one number by another.
1. **Special Numbers (e.g. Infinity, -Infinity, NaN):**  are considered numbers but don’t behave like normal numbers.
1. **Strings:**  are used to represent text. They are written by enclosing their content in quotes(',",`).
1. **Escaping a character:** inside of a string, a character preceded by a backslash (\) is given special significance.
1. **Unicode Standard:** assigns a number to virtually every character you would ever need, including characters from Greek, Arabic, Japanese, Armenian, and so on. If we have a number for every character, a string can be described by a sequence of numbers.
1. **Concatenate:** glue two strings together.
1. **Template Literal:** a string encased in backticks, as opposed to single or double quotes.
1.**Binary Operator:** operators that use two values.
1. **Unary Operator:** operators that use one value.
1. **console.log:** a method for logging things to the console, and thus making them viewable.
1. **Boolean:** type of value, which has just two values,true and false, which are written as those words.
1. **Logical Operators (e.g. !, &&, ||):** operators which can be applied to boolean values themselves.
1. **Ternary Operator (conditional operator):** only such operator, first value picks second or third, based on its being true or false.
1. **Empty Values (e.g. null, undefined):** used to denote the absence of a meaningful value - used interchangeably for now.
1. **Type Coercion:** When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect.
1. **Short Circuiting Evaluation:** only certain parts of a boolean expression (&&, ||) are evaulated. See examples for more details. (null || "agnes", "Agnes" || "user", false && "script")
## Chapter 2: Program Structure
1. **Expression:** A fragment of code that produces a value.
1. **Side Effects:** changes the internal state of the "machine" in a way that will affect the statements that come after it.
1. **Binding or Variable:** to catch and hold values. After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds.
1. **Reserved Keywords:** words with a special meaning, such as let, are keywords, and they may not be used as binding names. There are also a number of words that are “reserved for use” in future versions of JavaScript, which also can’t be used as binding names.
1. **Environment:** The collection of bindings and their values that exist at a given time is called the environment.
1. **Function:** A function is a piece of program wrapped in a value.
1. **Invoking:** Executing a function is called invoking, calling, or applying it.
1. **"return":** When a function produces a value, it is said to return that value.
1. **Conditional Execution:**  is created with the if keyword in JavaScript; where the program takes the proper branch based on the situation at hand.
1. **Loop:** a form of control flow that repeats a section of code a certain number of times.
1. **"while":** a keyword - is followed by an expression in parentheses and then a statement, much like if. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.
1. **Indenting code:** consistent indentation is a good habit.
1. **Comment:** A comment is a piece of text that is part of a program but is completely ignored by the computer.
## Chapter 3: Functions 
1. **Function:** A function is created with an expression that starts with the keyword function. Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.
1. **Return Statement:**  A return statement determines the value the function returns (A return keyword without an expression after it will cause the function to return undefined).
1. **Parameters to a Function:** behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.
1. **Scope:** Each binding has a scope, which is the part of the program in which the binding is visible.
1. **Lexical Scoping:** block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. Side note: When called, the function body sees the environment in which it was created, not the environment in which it is called.
1. **The Call Stack:** the way that control flows through functions is involved. Because a function has to jump back to the place that called it when it returns, the computer must remember the context from which the call happened. The place where the computer stores this context is the call stack.
1. **Optional Arguments/Default Parameters:** JS does not care if you pass in the required number of arguments when calling a function. If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
1. **Closure:** A function that references bindings from local scopes around it is called a closure... being able to reference a specific instance of a local binding in an enclosing scope—is called closure.
1. **Recursive:** A function that calls itself is called recursive.
1. **Pure Functions:** A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change.