import argparse
import glob
import sys
import os
import csv

args = sys.argv

def make_file_list(target_dir):
    original_directory = os.getcwd()
    os.chdir(target_dir)

    file_list = glob.glob('*.png')
    file_list_cut = []
    for file in file_list:
        file_list_cut.append(file[:-6])
    file_set = set(file_list_cut)

    with open('info.csv', 'w') as f:
        writer = csv.writer(f)
        for file in file_set:
            writer.writerow([file])
    os.chdir(original_directory)

if __name__== '__main__':
    try:
        target_directory = args[1]
    except:
        print('error')
        exit()

    make_file_list(target_directory)
