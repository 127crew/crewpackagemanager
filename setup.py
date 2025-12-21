from setuptools import setup

setup(
    name='crew-cli',
    version='1.0.0',
    py_modules=['crew', 'crew_utils'],
    install_requires=[
        # No external dependencies yet, but we could add 'requests' later
    ],
    entry_points={
        'console_scripts': [
            'crew = crew:main',
        ],
    },
    author='127 Crew',
    description='A Package Manager for C/C++',
)
