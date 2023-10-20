from django.test import TestCase
from rest_framework.test import APIClient

# Create your tests here.

class AppTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_search(self):
        response = self.client.post('/api/search', {"search_type": "repositories", "search_text": "django"})
        self.assertEqual(response.status_code, 200)

    def test_clear_cache(self):
        response = self.client.post('/api/clear-cache')
        self.assertEqual(response.status_code, 200)