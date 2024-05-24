# Author: Malaekah Khan
# Date: 16th May, 2024
# Description: 
# In-Class Activity - 1

def calculate_average_budget(movies):
    total_budget = sum(budget for _, budget in movies)
    return total_budget / len(movies)

def print_high_budget_movies(movies, average_budget):
    count = 0
    for movie, budget in movies:
        if budget > average_budget:
            print(f"{movie} has a budget of {budget}, which is {budget - average_budget} above the average.")
            count += 1
    print(f"\nTotal number of movies with a budget higher than the average: {count}")

def main():

    # List of movies
    movies = [
        ("Eternal Sunshine of the Spotless Mind", 20000000),
        ("Memento", 9000000),
        ("Requiem for a Dream", 4500000),
        ("Pirates of the Caribbean: On Stranger Tides", 379000000),
        ("Avengers: Age of Ultron", 365000000),
        ("Avengers: Endgame", 356000000),
        ("Incredibles 2", 200000000)
    ]

    # Here we will ask user how many movies they'd like to add
    num_new_movies = int(input("How many movies would you like to add? "))
    for _ in range(num_new_movies):
        name = input("Enter the name of the movie: ")
        budget = int(input(f"Enter the budget for {name}: "))
        movies.append((name, budget))

    # Calculate the average budget
    average_budget = calculate_average_budget(movies)
    print(f"\nThe average budget of the movies is: {average_budget}")

    # Print movies with a budget higher than the average
    print("\nMovies with a budget higher than the average:")
    print_high_budget_movies(movies, average_budget)

if __name__ == "__main__":
    main()