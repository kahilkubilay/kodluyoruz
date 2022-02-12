-- film tablosunda film uzunluğu length sütununda gösterilmektedir. uzunluğu
-- ortalama film uzunluğundan fazla kaç tane film vardır?

SELECT COUNT(*) AS count_avarage FROM  film
 WHERE film.length > 
(
	SELECT ROUND(AVG(length), 2) FROM film -- 115.26
)

-- 2. film tablosunda en yüksek rental_rate değerine sahip
-- kaç tane film vardır? (336)

SELECT COUNT(rental_rate) AS max_rental FROM film
WHERE film.rental_rate = 
(
	SELECT MAX(rental_rate) FROM film
);

-- 3. film tablosunda en düşük rental_rate ve en düşük
-- replacement_cost değerlerine sahip filmleri sıralayınız.

-- SELECT title, rental_rate, replacement_cost FROM film
-- ORDER BY replacement_cost;   // Sting Personal ::: 9.99
 
-- SELECT title, rental_rate, replacement_cost FROM film
-- ORDER BY rental_rate; // Frost Head :::  0.99

SELECT title, rental_rate, replacement_cost FROM film
WHERE (rental_rate <=  
(
	SELECT rental_rate FROM film
	WHERE title = 'Frost Head'
))
AND 
(replacement_cost <= 
(
	SELECT replacement_cost FROM film
	WHERE title = 'Sting Personal'
))

-- 4. payment tablosunda en fazla alışveriş yapan müşteleri (customer)
-- sıralayınız. max:: 11.99

SELECT * FROM payment
WHERE amount >= 
(
	SELECT MAX(AMOUNT) from payment
);

